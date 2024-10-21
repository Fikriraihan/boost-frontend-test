import BlogForm from "@/modules/Blog/BlogForm/Components/blog-form";

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl text-blue-600 font-semibold">
        Create a New Blog Post
      </h2>
      <div className="bg-white p-8 rounded-md mx-auto">
        <BlogForm />
      </div>
    </div>
  );
}
