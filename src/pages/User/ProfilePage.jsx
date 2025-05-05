import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { updateUserProfile, getUserProfile } from "../../services/api";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaSpinner, FaUser, FaEnvelope, FaLock, FaEdit, FaShoppingBag } from "react-icons/fa";

const ProfilePage = () => {
  const { user, refreshUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = await getUserProfile();
        setFormData({
          name: userData.name || "",
          email: userData.email || "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        toast.error("Failed to load profile data");
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords match if changing password
    if (formData.password && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      // Only include password if it's being changed
      const updateData = {
        name: formData.name,
        email: formData.email,
        ...(formData.password ? { password: formData.password } : {}),
      };

      await updateUserProfile(updateData);
      await refreshUserProfile();
      
      // Clear password fields after update
      setFormData((prev) => ({
        ...prev,
        password: "",
        confirmPassword: "",
      }));
      
      setIsEditing(false);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-amber-600 p-6 text-white">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-amber-100">Manage your account information</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center p-4 bg-amber-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-700">
                    <FaUser className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>

                <Link
                  to="/my-orders"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaShoppingBag className="text-gray-500 mr-3" />
                  <span>My Orders</span>
                </Link>
              </div>
            </div>

            {/* Profile Form */}
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Account Information</h2>
                <button
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-amber-600 hover:text-amber-700 flex items-center"
                >
                  <FaEdit className="mr-1" /> {isEditing ? "Cancel" : "Edit"}
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full pl-10 pr-3 py-2 border ${
                          isEditing ? "border-gray-300" : "border-gray-200 bg-gray-50"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400`}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full pl-10 pr-3 py-2 border ${
                          isEditing ? "border-gray-300" : "border-gray-200 bg-gray-50"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400`}
                      />
                    </div>
                  </div>

                  {/* Password Fields - Only show when editing */}
                  {isEditing && (
                    <>
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          New Password (leave blank to keep current)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaLock className="text-gray-400" />
                          </div>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="confirmPassword"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Confirm New Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaLock className="text-gray-400" />
                          </div>
                          <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Submit Button - Only show when editing */}
                  {isEditing && (
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors ${
                          loading ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {loading ? (
                          <>
                            <FaSpinner className="inline animate-spin mr-2" />
                            Updating...
                          </>
                        ) : (
                          "Save Changes"
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
