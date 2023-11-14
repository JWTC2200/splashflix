import { unsplash, unsplashCategories } from "@/app/unsplash/unsplash";

export const dynamic = "force-dynamic";

const getRandomCategories = () => {
  let chosenCategories: string[] = [];
  for (let i = 0; i < 5; i++) {
    const filteredCategories = unsplashCategories.filter(
      (category) => !chosenCategories.includes(category)
    );
    chosenCategories.push(
      filteredCategories[Math.floor(Math.random() * filteredCategories.length)]
    );
  }
  return chosenCategories;
};

const categories = getRandomCategories();
const testImages = Array(20).fill("/images/sixteenmilesout.jpg");
const testSlites = categories.map((category) => {
  return { slides: testImages, category: category };
});

export const GET = async () => {
  const allPromises: any = await Promise.allSettled(
    categories.map(async (category) => {
      const res = await unsplash.photos.getRandom({
        count: 20,
        query: category,
      });
      const data: any = await res;
      return { slides: data.response, category: category };
    })
  );
  console.log(allPromises);
  const results = allPromises.map(
    (prom: { status: string; value: [] }) => prom.value
  );

  return new Response(JSON.stringify(results), { status: 201 });
};
