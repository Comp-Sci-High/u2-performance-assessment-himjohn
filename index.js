const prompt = require("prompt-sync")()
async function mealRep(meal) {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal)
  const data = await response.json()
  console.log(data["meals"][0]["strInstructions"])
  return	data
}

    


async function imageGet(image) {
  "https://api.openai.com/v1/images/generations"
        const options = {
            method: "POST",
            headers: {
              Authorization: "Bearer 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",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(image),
          };
          const response = await fetch("https://api.openai.com/v1/images/generations",options);
          const data = await response.json();
          console.log(data)
        };
        
        async function main(){
      let meal= prompt("What Kind Of Meal Would You like To Prepared Today!? : ")
    const mealWait = await mealRep(meal)
      
    const imageWait = await imageGet({
        prompt: meal
      })
    }

    main()