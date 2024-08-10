import { useEffect, useState } from "react";
import { fetchArticles } from "@/api";

const ArticleSection = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data?.data);
      } catch (error) {
        setError("Failed to load articles.");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-[#faf9f5]">
      <div className="container mx-auto max-w-[1250px] px-4">
        <div className="py-16">
          <p className="text-[36px] font-bold font-Unbounded text-tertiary text-center">
            Articles
          </p>
          <p className="text-[24px] font-light font-Unbounded text-tertiary text-center mt-2">
            Our curated writings, offering something for every reader.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-white shadow-md overflow-hidden relative">
              <img
                src={articles[0].featured_image}
                alt={articles[0].featured_image_caption}
                className="w-full h-[450px] md:h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              />
              <div className="absolute bottom-0 w-full bg-tertiary p-4">
                <h2 className="text-lg md:text-xl font-bold text-white">
                  {articles[0].title}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {articles.slice(1, 5).map((article) => (
                <div
                  key={article.id}
                  className="bg-white shadow-md overflow-hidden relative"
                >
                  <img
                    src={article.featured_image}
                    alt={article.featured_image_caption}
                    className="w-full md:h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  />
                  <div className="absolute bottom-0 w-full bg-tertiary p-5 md:p-2">
                    <h2 className="text-lg md:text-base font-bold text-white">
                      {article.title.length > 50
                        ? `${article.title.substring(0, 50)}...`
                        : article.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
