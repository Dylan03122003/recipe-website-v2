import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../data/blog";
import { getFormattedDate } from "../utils/getFormattedDate";
import ads from "./../assets/img/ads.png";
import img7 from "./../assets/img/listblog_img7.png";
import img8 from "./../assets/img/listblog_img8.png";
import img9 from "./../assets/img/listblog_img9.png";

const BlogList = () => {
  const searchKeyRef = useRef();
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = searchKeyRef.current ? searchKeyRef.current.value : "";
    setFilteredBlogs(
      blogsData.filter((blog) =>
        blog.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  return (
    <div className="m-auto px-[80px] max-lg:px-[60px] max-md:px-[25px] w-fit mb-20">
      <div className="text-center mt-[80px] mb-[80px] max-md:px-[20px]">
        <h2 className="text-[64px] tracking-[-2.56px] font-[600]">
          Blog & Article
        </h2>
        <p className="max-w-[840px] leading-[28px] font-[400] text-black/60 m-auto npmmt-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <form
          onSubmit={handleSearch}
          className="relative w-fit m-auto mt-[80px] max-lg:w-[90%]"
        >
          <input
            type="text"
            ref={searchKeyRef}
            placeholder="Search article, news or recipe..."
            className="max-lg:w-[100%] w-[700px] h-[80px] border border-black/10 rounded-[24px] p-[32px] pr-[180px] max-sm:h-[30px] max-sm:text-[15px] max-sm:pl-[20px]  max-sm:pr-[110px]"
          />
          <button
            type="submit"
            className="absolute right-[10px] top-[10px] w-[160px] h-[60px] rounded-[16px] bg-black text-white tracking-[-0.28px] text-[14px] max-sm:w-[90px] max-sm:h-[50px]  max-sm:top-[8px]"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-[40px]">
        <div className="flex flex-col gap-[40px] flex-1 flex-shrink-1 flex-grow-1 basis-[700px]  max-sm:gap-[80px]">
          {filteredBlogs && filteredBlogs.length === 0 && (
            <div className="md:w-full 2xl:w-[1000px] text-gray-600 text-xl text-center">
              There is no blogs with that search key
            </div>
          )}

          {filteredBlogs.map((blog, index) => (
            <Link
              to={`/blogs/${blog.blogID}`}
              key={index}
              href=""
              className="flex gap-[50px] items-center max-sm:flex-wrap max-sm:gap-[20px]"
            >
              <img
                src={blog.blogImg}
                alt=""
                className="min-w-[290px] h-[200px] object-cover rounded-[20px] max-sm:w-[100%] max-sm:h-[63vw]"
              />
              <div>
                <h4 className="text-[24px] font-[600] tracking-[-0.96px]">
                  {blog.title}
                </h4>
                <p className="max-w-[650px] leading-[28px] font-[400] text-black/60 m-auto mt-[16px]">
                  {blog.description}
                </p>
                <div className="flex gap-[48px] mt-[44px] items-center">
                  <div className="flex items-center gap-[16px]">
                    <img
                      src={blog.authorImg}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <p className="font-[700] tracking-[-0.32px]">
                      {blog.authorName}
                    </p>
                  </div>
                  <p className="font-[500] text-[14px] tracking-[-0.28px] text-black/60 pt-[2px]">
                    {getFormattedDate(blog.createdAt)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-xl:flex max-xl:w-[100%] max-xl:flex-wrap justify-between items-center">
          <div className="max-w-[500px] flex flex-col gap-[32px] max-2xl:max-w-[400px] max-xl:mt-[40px]">
            <h3 className="text-[32px] font-[600] tracking-[-1.28px]">
              Tasty Recipes
            </h3>
            <a href="" className="flex gap-[40px]  items-center">
              <img
                src={img7}
                alt=""
                className="min-w-[180px] h-[120px] object-cover rounded-[20px]"
              />
              <div>
                <h4 className="text-[20px] font-[600] tracking-[-0.8px] leading-[28px]">
                  Chicken Meatballs with Cream Cheese
                </h4>
                <p className="font-[400] text-black/60 text-[14px] mt-[16px]">
                  By Andreas Paula
                </p>
              </div>
            </a>
            <a href="" className="flex gap-[40px]  items-center">
              <img
                src={img8}
                alt=""
                className="min-w-[180px] h-[120px] object-cover rounded-[20px]"
              />
              <div>
                <h4 className="text-[20px] font-[600] tracking-[-0.8px] leading-[28px]">
                  Traditional Bolognaise Ragu
                </h4>
                <p className="font-[400] text-black/60 text-[14px] mt-[16px]">
                  By Andreas Paula
                </p>
              </div>
            </a>
            <a href="" className="flex gap-[40px]  items-center">
              <img
                src={img9}
                alt=""
                className="min-w-[180px] h-[120px] object-cover rounded-[20px] "
              />
              <div>
                <h4 className="text-[20px] font-[600] tracking-[-0.8px] leading-[28px]">
                  Pork and Chive Chinese Dumplings
                </h4>
                <p className="font-[400] text-black/60 text-[14px] mt-[16px]">
                  By Andreas Paula
                </p>
              </div>
            </a>
          </div>
          <img src={ads} alt="" className="mt-[38px] w-[400px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default BlogList;
