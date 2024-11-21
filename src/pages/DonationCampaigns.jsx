import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const DonationCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDivision, setSelectedDivision] = useState("all");

  const divisions = ["all", "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Sylhet", "Barisal", "Rangpur"];

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("/campaigns.json");
        setCampaigns(response.data.campaigns);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const filteredCampaigns = selectedDivision === "all" 
    ? campaigns 
    : campaigns.filter(campaign => campaign.division === selectedDivision);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-[83.333333%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Active Donation Campaigns
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse our ongoing campaigns and choose where you'd like to make a difference. 
            Every donation brings warmth to those in need.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {divisions.map((division) => (
            <button
              key={division}
              onClick={() => setSelectedDivision(division)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${selectedDivision === division 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-600 hover:bg-blue-50"}`}
            >
              {division.charAt(0).toUpperCase() + division.slice(1)}
            </button>
          ))}
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
            >
              <div className="relative">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                    {campaign.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {campaign.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>{campaign.division}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <FaPhoneAlt className="text-blue-600" />
                    <span>{campaign.contactInfo}</span>
                  </div>
                </div>

                <Link
                  to={`/campaign/${campaign.id}`}
                  className="inline-block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg 
                    hover:bg-blue-700 transition-all duration-300"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              No campaigns found for this division.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationCampaigns; 