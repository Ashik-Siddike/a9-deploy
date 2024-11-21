import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const DonationDetails = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const { addDonation } = useAuth();

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get("/campaigns.json");
        const foundCampaign = response.data.campaigns.find(
          (c) => c.id === parseInt(id)
        );
        setCampaign(foundCampaign);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching campaign:", error);
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  const handleDonation = async (e) => {
    e.preventDefault();
    if (submitting) return;
    
    setSubmitting(true);
    try {
      const formData = {
        items: e.target.itemType.value,
        quantity: parseInt(e.target.quantity.value),
        location: e.target.location.value,
        notes: e.target.notes.value,
        campaign: campaign.title,
        division: campaign.division
      };

      addDonation(formData);
      
      toast.success("Thank you! We will reach your destination soon.", {
        duration: 3000,
        position: 'top-center',
      });
      e.target.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl text-gray-600">Campaign not found</h2>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-[83.333333%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Campaign Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-3xl font-bold text-gray-800">{campaign.title}</h1>
                  <span className="px-4 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                    {campaign.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{campaign.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>{campaign.division}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaPhoneAlt className="text-blue-600" />
                    <span>{campaign.contactInfo}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaRegClock className="text-blue-600" />
                    <span>Processing Time: 24-48 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Make a Donation</h2>
            <form onSubmit={handleDonation} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Quantity of Items *
                </label>
                <input
                  type="number"
                  name="quantity"
                  required
                  min="1"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 2"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Item Type *
                </label>
                <select
                  name="itemType"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select item type</option>
                  <option value="blanket">Blanket</option>
                  <option value="jacket">Jacket</option>
                  <option value="sweater">Sweater</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Pickup Location *
                </label>
                <textarea
                  name="location"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your complete address"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any special instructions or details about your donation?"
                  rows="3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-lg font-medium
                  hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02]
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Donation
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-medium">Note:</span> Our team will contact you within 24 hours to confirm your donation and arrange pickup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails; 