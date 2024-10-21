import MotionSection from "@/components/shared/motion-section";
import BlogList from "@/modules/Blog/BlogList/Components/blog-list";

export default function Home() {
  return (
    <div className="space-y-12">
      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 mt-3"
      >
        <h1 className="bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Boost - Frontend Test
        </h1>
        <h2 className="text-xl text-gray-600 max-w-2xl mx-auto">
          Created By: Fikri
        </h2>
      </MotionSection>
      <section>
        <BlogList />
      </section>
    </div>
  );
}
