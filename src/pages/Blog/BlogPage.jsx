import React, { useState } from "react";
import { FaCalendar, FaUser, FaMagnifyingGlass, FaTags } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "training", name: "Training" },
    { id: "health", name: "Health & Wellness" },
    { id: "nutrition", name: "Nutrition" },
    { id: "behavior", name: "Behavior" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Are you having trouble finding the right dog?",
      excerpt:
        "Choosing the right dog breed for your lifestyle is crucial for a happy relationship with your pet. Here's how to make the best choice.",
      image: "/blog/blog1.jpg",
      date: "June 15, 2024",
      author: "Dr. Emma Wilson",
      category: "behavior",
      featured: true,
    },
    {
      id: 2,
      title: "Is your dog aggressive towards your kids?",
      excerpt:
        "Understanding and addressing aggressive behavior in dogs, especially around children, is essential for a safe home environment.",
      image: "/blog/blog2.jpg",
      date: "June 10, 2024",
      author: "Michael Thompson",
      category: "behavior",
      featured: false,
    },
    {
      id: 3,
      title: "Looking for someone to train your dog?",
      excerpt:
        "Professional dog training can make a world of difference. Learn what to look for in a trainer and what methods work best.",
      image: "/blog/blog3.jpg",
      date: "June 5, 2024",
      author: "Sarah Johnson",
      category: "training",
      featured: false,
    },
    {
      id: 4,
      title: "Choose the most stylish and durable products for your dog",
      excerpt:
        "Quality matters when it comes to dog products. Discover how to select items that are both fashionable and built to last.",
      image: "/blog/blog4.jpg",
      date: "May 28, 2024",
      author: "Alex Parker",
      category: "nutrition",
      featured: false,
    },
    {
      id: 5,
      title: "Essential vaccinations for your new puppy",
      excerpt:
        "A comprehensive guide to puppy vaccinations: what they need, when they need them, and why they're important.",
      image: "/blog/blog1.jpg",
      date: "May 20, 2024",
      author: "Dr. Emma Wilson",
      category: "health",
      featured: true,
    },
    {
      id: 6,
      title: "The best diet for senior dogs",
      excerpt:
        "As dogs age, their nutritional needs change. Learn how to adjust your pet's diet to keep them healthy in their golden years.",
      image: "/blog/blog2.jpg",
      date: "May 15, 2024",
      author: "Dr. James Miller",
      category: "nutrition",
      featured: false,
    },
  ];

  // Filter posts based on search query and category
  const filteredPosts = blogPosts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter(
      (post) => activeCategory === "all" || post.category === activeCategory,
    );

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pawsome Blog</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Expert advice, tips, and stories about pet care, training, health, and
          more. Stay informed and give your furry friends the best care
          possible.
        </p>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <FaCalendar className="mr-1" /> {post.date}
                      <span className="mx-2">•</span>
                      <FaUser className="mr-1" /> {post.author}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-amber-600 font-medium hover:text-amber-700"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative md:w-1/3">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <FaMagnifyingGlass className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaCalendar className="mr-1" /> {post.date}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaUser className="mr-1" /> {post.author}
                  </div>
                  <div className="flex items-center text-sm">
                    <FaTags className="mr-1 text-amber-600" />
                    <span className="capitalize">{post.category}</span>
                  </div>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="block mt-4 text-amber-600 font-medium hover:text-amber-700"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="mt-16 bg-amber-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get the latest articles, tips, and pet care advice delivered straight
          to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
