import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const config = {
  public_key: "FLWPUBK_TEST-b8dfa7b3d7c7a0b41ffe1cde1bc3787c-X",
  tx_ref: Date.now(),
  amount: 100,
  currency: "NGN",
  payment_options: "card,mobilemoney,ussd",
  customer: {
    email: "zima@gmail.com",
    phone_number: "08035749655",
    name: "john doe",
  },
  customizations: {
    title: "my Payment Title",
    description: "Payment for items in cart",
    logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  },
};

const handleFlutterPayment = useFlutterwave(config);

const AllCoursesById = () => {
  const params = useParams();
  const { isPending, isSuccess, isError, error, data } = useQuery({
    queryKey: ["courseById"],
    queryFn: async () => {
      const response = await axios(`${BASE_URL}/course/${params.courseId}`);
      return response.data;
    },
  });

  const handleBuy = () => {
    handleFlutterPayment({
      callback: (response) => {
        if (response.status === "successful") {
          alert("Course purchased successfully.");
        }
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    console.log("error: ", error);
    <p>An error occurred</p>;
  }

  if (isSuccess && data) {
    return (
      <div>
        <h1>Course Details</h1>
        <p>{data.courseData.course}</p>
        <p>{data.courseData.details}</p>
        <p>{data.courseData.price}</p>

        <button onClick={handleBuy}>Buy</button>
      </div>
    );
  }

  return null;
};

export default AllCoursesById;
