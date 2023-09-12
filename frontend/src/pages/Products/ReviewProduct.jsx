import { useEffect, useState } from 'react';
import axiosInstance from '../../config/Axios';

function ReviewProduct({ product }) {
  const id = product.id;
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    content: '',
  });
  const [isWritingReview, setIsWritingReview] = useState(false);

  useEffect(() => {
    // Fetch categories from the server when the component mounts
    axiosInstance
      .get(`/api/reviews/${id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to the API to create a new review
    axiosInstance
      .post(`/api/reviews/${id}`, newReview)
      .then(() => {
        alert('Review submitted successfully!');
      })
      .catch((error) => {
        alert('Error adding review:', error);
      });

    setIsWritingReview(false);
    setNewReview({
      name: '',
      email: '',
      content: '',
    });
  };

  reviews.reverse();
  reviews.length = 3;
  return (
    <>
      <div>
        <div className="mt-8">
          {isWritingReview ? (
            <div>
              <h2 className="text-xl font-medium mb-2">Submit a Review</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newReview.name}
                    onChange={(e) =>
                      setNewReview({ ...newReview, name: e.target.value })
                    }
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newReview.email}
                    onChange={(e) =>
                      setNewReview({ ...newReview, email: e.target.value })
                    }
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium"
                  >
                    Review:
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={newReview.content}
                    onChange={(e) =>
                      setNewReview({ ...newReview, content: e.target.value })
                    }
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <button
              onClick={() => setIsWritingReview(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Write a Review
            </button>
          )}
        </div>
        <div>
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white p-4 rounded-md shadow-xl mb-4"
            >
              <div className="flex flex-col flex-start text-sm">
                <p className="text-left underline m-2 font-bold">
                  {review.name}
                </p>
                <blockquote>
                  <p className="text-lg font-medium bg-[#c9c9c9] p-2 rounded-xl">
                    {review.content}
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReviewProduct;
