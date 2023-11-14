import { unsplash, Unsplash } from "./unsplash/unsplash";
import Link from "next/link";

export const dynamic = "force dynamic";

export default async function Home() {
  const getImage = async () => {
    try {
      const res: any = await unsplash.photos.getRandom({
        count: 5,
      });
      if (res.type === "success") {
        const data: Unsplash[] = await res.response;
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const images: Unsplash[] | undefined = await getImage();

  return (
    <main className="max-w-screen-2xl mx-auto px-4 md:px-8 py-8 md:py-12 border-white">
      {images ? (
        <div className="w-full h-full flex flex-col gap-4">
          {images.map((image, index) => {
            if (index % 2) {
              return (
                <>
                  <div className="flex text-center flex-col sm:flex-row ">
                    <div className="flex flex-col sm:justify-center sm:min-w-[30%] px-2 pt-4 sm:px-8">
                      <Link
                        href={image.user.links.html}
                        className="mt-2 text-xl text-slate-300 font-satisfy hover:text-red-300"
                      >
                        Taken by: {image.user.name}
                      </Link>
                      {image.location.name ? (
                        <p className="mt-2 text-slate-400">
                          {image.location.name}
                        </p>
                      ) : null}
                    </div>
                    <Link
                      href={image.links.html}
                      className="h-60 sm:h-96 w-full order-first sm:order-none px-4"
                    >
                      <img
                        src={image.urls.regular}
                        alt={image.alt_description}
                        className="h-full w-full object-cover border-2 border-slate-600 rounded-xl shadow-[0_0_12px_4px_#475569] hover:border-slate-200 hover:shadow-[0_0_12px_4px_#e2e8f0]"
                      />{" "}
                    </Link>
                  </div>
                  {index < images.length - 1 ? (
                    <hr className="border-4 my-4 w-full border-slate-700 rounded-full "></hr>
                  ) : null}
                </>
              );
            } else {
              return (
                <>
                  <div className="flex text-center flex-col sm:flex-row ">
                    <Link
                      href={image.links.html}
                      className="h-60 sm:h-96 w-full order-first sm:order-none px-4"
                    >
                      <img
                        src={image.urls.regular}
                        alt={image.alt_description}
                        className="h-full w-full object-cover border-2 border-slate-600 rounded-xl shadow-[0_0_12px_4px_#475569] hover:border-slate-200 hover:shadow-[0_0_12px_4px_#e2e8f0]"
                      />{" "}
                    </Link>
                    <div className="flex flex-col sm:justify-center sm:min-w-[30%] px-2 pt-4 sm:px-8">
                      <Link
                        href={image.user.links.html}
                        className="mt-2 text-xl text-slate-300 font-satisfy hover:text-red-300"
                      >
                        Taken by: {image.user.name}
                      </Link>
                      {image.location.name ? (
                        <p className="mt-2 text-slate-400">
                          {image.location.name}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  {index < images.length - 1 ? (
                    <hr className="border-4 my-4 w-full border-slate-700 rounded-full "></hr>
                  ) : null}
                </>
              );
            }
          })}
        </div>
      ) : null}
    </main>
  );
}
