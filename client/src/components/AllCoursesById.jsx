import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../../constants";
import "../styles/AllCoursesById.css";
import { useQuery } from "@tanstack/react-query";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const AllCoursesById = () => {
  const { courseId } = useParams();
  const userData = JSON.parse(localStorage.getItem("userData")) || {};

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["courseById", courseId],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/course/${courseId}`);
      return response.data;
    },
  });

  const handleBuy = () => {
    if (!data?.courseData || !userData) return;

    const paymentConfig = {
      public_key: "FLWPUBK_TEST-b8dfa7b3d7c7a0b41ffe1cde1bc3787c-X",
      tx_ref: `TX-${Date.now()}`,
      amount: data.courseData.price,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: userData.email,
        phone_number: userData.phone || "0000000000",
        name: userData.name,
      },
      customizations: {
        title: data.courseData.course,
        description: `Payment for ${data.courseData.course}`,
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
    };

    const handleFlutterPayment = useFlutterwave(paymentConfig);
    handleFlutterPayment({
      callback: async (response) => {
        if (response.status === "successful") {
          try {
            await axios.post(`${BASE_URL}/purchase`, {
              userId: userData.email,
              courseId: data.courseData._id,
              transactionRef: response.tx_ref,
              amount: data.courseData.price,
              status: response.status,
            });
            alert("Course purchased successfully!");
          } catch (err) {
            console.error("Error saving purchase:", err);
            alert("Payment successful, but purchase record failed.");
          }
        }
        closePaymentModal();
      },
      onClose: () => {},
    });
  };

  if (isLoading) return <p className="loading">Loading...</p>;
  if (isError)
    return <p className="error">Error fetching course: {error.message}</p>;

  return (
    <div className="course-container">
      <div className="course-card">
        <h1 className="course-title">Course Details</h1>
        <p className="course">
          <strong>Course:</strong> {data.courseData.course}
        </p>
        <div className="details">
          <strong>Details:</strong> {data.courseData.details}
        </div>
        <p className="price">
          <strong>Price:</strong> ₦{data.courseData.price}
        </p>
        <button className="buy-btn" onClick={handleBuy}>
          Buy Course
        </button>
      </div>
    </div>
  );
};

export default AllCoursesById;
