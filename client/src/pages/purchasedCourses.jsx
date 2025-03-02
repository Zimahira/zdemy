import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useParams } from "react-router";

const PurchasedCourses = () => {
  const { userId } = useParams();
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/purchases/${userId}`);
        setPurchasedCourses(response.data);
        console.log(userId);
      } catch (error) {
        console.error("Error fetching purchased courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedCourses();
  }, [userId]);

  if (loading) return <p>Loading purchased courses...</p>;

  return (
    <div>
      <h1>Purchased Courses</h1>
      {purchasedCourses.length === 0 ? (
        <p>You haven't bought any courses yet.</p>
      ) : (
        <ul>
          {purchasedCourses.map((purchase) => (
            <li key={purchase._id}>
              <h3>{purchase.courseId.title}</h3>
              <p>{purchase.courseId.description}</p>
              <p>Amount Paid: {purchase.amount} NGN</p>
              <p>Transaction Status: {purchase.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PurchasedCourses;
