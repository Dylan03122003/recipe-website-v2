import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { blogsData } from "../data/blog";
import { getFormattedDate } from "../utils/getFormattedDate";

const Blog = () => {
  const { blogID } = useParams();

  const blogIDNumber = parseInt(blogID);

  const blogDetail = blogsData.find((b) => b.blogID === blogIDNumber);

  return (
    <div className="px-[15px] box-border">
      <h1 className="text-center text-[64px] font-[600] tracking-[-2.56px] mt-[80px] max-sm:text-[60px] max-sm:mt-[60px]">
        {blogDetail.title}
      </h1>
      <div>
        <div className="flex items-center justify-center gap-[85px] mt-[40px] mb-[59px] max-sm:gap-[60px]">
          <div className="flex items-center gap-[16px]">
            <img
              src={blogDetail.authorImg}
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <p className="font-[700] tracking-[-0.32px]">
              {blogDetail.authorName}
            </p>
          </div>
          <p className="text-black/60 text-[14px] tracking-[-0.28px] font-[500]">
            {getFormattedDate(blogDetail.createdAt)}
          </p>
        </div>
      </div>
      <p className="text-center max-w-[1059px] m-auto text-black/60 leading-[28px] font-normal">
        {blogDetail.description}
      </p>
      <img
        src={blogDetail.blogImg}
        alt=""
        className="w-[1280px] h-[600px] m-auto rounded-[30px] my-[64px] object-cover	max-sm:min-h-[230px] max-sm:h-fit max-sm:w-fit"
      />

      <div className="flex max-w-[1059px] justify-center m-auto gap-[89px] p-[12px] box-border max-sm:block">
        <div className="mb-10">
          {blogDetail.contents.map((content) => (
            <div key={content.contentID} className="mb-10">
              <h3 className="text-[28px] font-[600] tracking-[-0.8px]">
                {content.title}
              </h3>
              <p className="mt-[24px] text-[16px] font-[400] text-black/60 leading-[28px]">
                {content.description}
              </p>
            </div>
          ))}

          {/* <div className="mt-[112px]">
            <h3 className="text-[28px] font-[600] tracking-[-0.8px]">
              Do you cook at home on your days off?
            </h3>
            <img src={img2} alt="" className="my-[32px]" />
            <p className="mt-[24px] text-[16px] font-[400] text-black/60 leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div> */}

          <div className="mt-[112px]  p-[49px] bg-gradient-to-r from-slate-100 to-white w-fit">
            <h3 className="text-[36px] font-[500] tracking-[-1.44px] italic	to-blue-500">
              {blogDetail.quote}
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center max-sm:mt-[30px]">
          <p className="text-[14px] font-[600] tracking-[1.4px] w-max">
            SHARE THIS ON:
          </p>
          <div className="flex flex-col gap-[40px] text-[22px] mt-[32px] ">
            <BiLogoFacebook />
            <BiLogoTwitter />
            <BsInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
