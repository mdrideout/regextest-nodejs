const express = require('express');
const app = express();

app.get('/', (req, res) => {
  foodList = createFoodList();

  res.json(foodList);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});

/**
 * Returns JSON array of ingredient lists for foods
 */
function createFoodList() {
  let ingredientStrings = [
    "Enriched Flour Bleached (Wheat Flour, Niacin, Iron, Thiamin Mononitrate, Riboflavin, Folic Acid), Sugar, Corn Syrup, Carrot Flavored Pieces (Corn Syrup, Enriched Flour Bleached [Wheat Flour, Niacin, Iron, Thiamin Mononitrate, Riboflavin, Folic Acid], Corn Cereal, Palm Oil, Color [artificial Color, Yellow 6, Red 40], Carrot Powder), Leavening (baking Soda, Sodium Aluminum Phosphate, Monocalcium Phosphate). Contains 2% Or Less Of: Modified Corn Starch, Palm Oil, Corn Starch, Propylene Glycol Mono And Diesters Of Fatty Acids, Salt, Distilled Monoglycerides, Cinnamon, Spices, Dicalcium Phosphate, Sodium Stearoyl Lactylate, Color Added, Xanthan Gum, Cellulose Gum.",
		"Sugar, Artificial Flavor, Red 3",
		"Sugar, Rice Flour, Potato Starch, Canola Oil, Corn Starch, Leavening (baking Soda, Sodium Aluminum Sulfate, Monocalcium Phosphate), Salt, Xanthan Gum.",
		"Rice Flour, Whole Grain Sorghum Flour, Sugar, Brown Rice Flour (Rice Flour, Stabilized Rice Bran With Germ), Soybean Oil, Dextrose, Leavening (baking Soda, Sodium Aluminum Phosphate, Monocalcium Phosphate), Food Starch-modified, Salt, Tapioca Starch, Xanthan Gum, Buttermilk, Natural Flavors (Contains Milk Derivatives).",
		"Whole Wheat Flour*, Buttermilk Powder*, Vital Wheat Gluten*, Evaporated Cane Juice*, Baking Soda, Leavening Agent (monocalcium Phosphate, Sodium Bicarbonate, Non-gmo Cornstarch), Sea Salt, Tocopherols (vitamin E).",
		"Unbleached Wheat Flour, Rye Flour, Oat Flour, Sugar, Semisweet Chocolate Chips (Sugar, Chocolate Liquor, Cocoa Butter, Soy Lecithin [an Emulsifier], Vanilla), Cocoa (alkalized), Sweet Whey, Sweet Cream Buttermilk, Monocalcium Phosphate, Sodium Bicarbonate, Salt, Natural Flavor.",
		"Enriched Bleached Flour (Wheat Flour (Whet Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), Sugar, Leavening (sodium Bicarbonate, Monocalcium Phosphate, Sodium Aluminum Phosphate), Soy Flour, Dextrose,Partially Hydrogenated Soybean And Cottonseed Oils, Cultured Buttermilk, Salt, Monoglyceride Of Fatty Acids, Eggs.",
		"Mechanically Separated Chicken, Water, Pork, Beef, Textured Soy Flour, Dextrose, Soy Protein Concentrate, Bread Crumbs (Wheat Flour, Salt), Less Than 2% Of: Parmesan Cheese (Part Skim Cow's Milk, Cheese Cultures, Salt, Enzymes), Dried Garlic, Onion Powder, Black Pepper, Natural Flavors, Salt, Sodium Phosphate",
		"Turkey, Water, Mechanically Separated Turkey, Textured Soy Flour, Bread Crumbs (Wheat Flour), Soy Protein Concentrate, Corn Syrup Solids, Natural Flavors, Salt, Dehydrated Onion.",
		"Beef And Pork, Water, Bread Crumbs (Wheat Flour, Salt, Yeast), Textured Soy Protein Concentrate (soy Protein Concentrate, Caramel Color), Egg Whites, Soy Protein Concentrate, Contains 2% Or Less Of The Following: Romano Cheese (pasteurized Sheep's And Cow's Milk, Rennet, Salt, Cheese Cultures, Enzymes), Natural Flavors, Dehydrated Onions, Corn Syrup Solids, Salt, Sodium Phosphate.",
		"Tomatoes, Onions, Olive Oil, Salt, Garlic, Basil, Spices, Calcium Chloride.",
		"Cento Italian Tomatoes, Crushed Tomatoes, Extra Virgin Olive Oil, Fresh Carrots, Fresh California Garlic, Fresh Basil, Honey, Salt And Crushed Red Pepper.",
		"Durum Semolina, Olive Oil, Corn Starch, Seasoning (Tomato Powder, Sugar, Salt, Parmesan Cheese [Pasteurized Milk, Cultures, Enzymes, Salt], Garlic Powder, Onion Powder, Yeast Extract, Dehydrated Parsley, Olive Oil, Spices, Citric Acid), Canola Oil, Yeast, Sorbitan Monostearate, Ascorbic Acid, Salt, Parsley Flakes, Soy Lecthin, Leavening (calcium Acid Pyrophosphate, Monocalcium Phosphate), Baking Soda.",
		"Pastene Tomatoes, Fresh Onions, Fresh Garlic, Soybean Oil, Olive Oil, Sugar, Salt, Fresh Basil, Spices, Crushed Red Pepper.",
		"Italian Plum Tomatoes, Olive Oil, Fresh Onions, Salt, Garlic, Basil, Parsley, Black Pepper, Oregano, Ground Bay.",
		"Sugar, Wheat Starch, Egg White, Enriched Bleached Flour (Bleached Wheat Flour, Niacin, Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), Leavening (monocalcium Phosphate, Baking Soda), Contains 2% Or Less Of Corn Starch, Salt, Artificial Flavor, Whipping Aid (sodium Lauryl Sulfate)",
		"Water, Sugar, Wheat Starch, Enriched Wheat Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), Dried Egg White, Leavening (sodium Bicarbonate, Calcium Phosphate, Sodium Acid Pyrophosphate, Sodium Aluminum Phosphate), Artificial Flavor, Salt, Gum Arabic.",
		"Cage-free Eggs (egg Whites, Water, Guar Gum, Sodium Citrate, Triethyl Citrate), Sugar, Rice Flour, Cornstarch, Tapioca Starch, Potato Starch, Vanilla, Cream Of Tartar, Salt.",
		"Cage Free Egg Whites (egg Whites, Water, Guar Gum, Sodium Citrate, Triethyl Citrate), Cane Sugar, Cake Flour, Confectioner's Sugar (Cane Sugar, Corn Starch, Unbleached Unbromated Wheat Flour, Cream Of Tartar, Lemon Juice, Sea Salt, Vanilla Extract (water, Alcohol, Glycerin, And Vanilla Bean Extarctives).",
		"Reduced Fat Sweetened Condensed Milk (Milk, Skim Milk, Sugar, Vitamin A Palmitate), Water, High Fructose Corn Syrup, Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), Sugar, Shortening (palm Oil And Soybean Oil), Contains 2% Or Less: Lemon Juice Concentrate, Egg Yolk, Egg Whites (dried), Lemon Pulp, Baking Soda, Cornstarch, Salt, Carob Bean Gum, Agar, Lemon Oil, Monosodium Phosphate, Soy Lecithin, Cream Of Tartar, Artificial Flavor.",
		"Water, Sugar, Unbleached Enriched Wheat Flour (niacin, Reduced Iron, Thiamin Mononitrate, Riboflavin, Folic Acid), Palm Oil, Egg Whites (triethyl Citrate, Water, Xanthan Gum), Modified Food Starch (Corn), Egg Yolks, Lemon Puree, Salt, Dextrose, Carob Bean Gum, Potassium Sorbate (as A Preservative) Agar, Glucono Delta Lactone, Sorbic Acid, Lemon Oil, Cream Of Tartar, Sodium Phosphate, Sodium Aluminum Sulphate, Natural Flavor, Vanillin, Guar Gum.",
		"Water, Sugar, Enriched Flour (Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), High Fructose Corn Syrup, Palm Oil, Food Starch-modified, Egg Yolks, Contains Less Than 2% Of: Egg Whites, Nonfat Milk, Margarine (palm Oil, Water, Salt, Mono- And Diglycerides, Soy Lecithin, Sodium Benzoate [to Preserve Freshness], Artificial Flavors, Colored With Beta Carotene, Vitamin A Palmitate), Citric Acid, Lemon Pulp Cells, Salt Dextrose, Cornstarch, Lemon Juice Concentrate, Carob Bean Gum, Agar, Lemon Oil, Sodium Citrate, Sodium Phosphate, Potassium Bitartarate, Artificial Color (yellow 5, Yellow 6), Artificial Flavor, Apple Cider Vinegar, Preserved With Sorbic Acid And Calcium Propionate.",
		"Water, Sugar, Unbleached Enriched Wheat Flour (niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), Palm Oil, Modified Food Starch (Corn), Lemon Puree, Unsalted Butter, Gum Blend (Sugar, Modified Corn Starch, Carob Bean Gum, Agar, Salt), Salt, Potassium Sorbate (as A Preservative), Dextrose, Egg Whites, Corn Starch, Sodium Polyphosphate, Baking Powder, Guar Gum, Cream Of Tartar, Vanilla, Citric Acid (as A Preservative), Artificial Color (propylene Glycol, Fd&c Yellow #5 And #6, Red #40)",
		"Water, Sugar, High Fructose Corn Syrup, Enriched Flour (Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), Palm Oil, Egg Whites, Nonfat Milk, Food Starch-modified, Egg Yolks, Contains Less Than 2% Of: Margarine (palm Oil, Water, Salt, Mono- And Diglycerides, Soy Lecithin, Sodium Benzoate [to Preserve Freshness], Artificial Flavors, Colored With Beta Carotene, Vitamin A Palmitate), Citric Acid, Lemon Pulp Cells, Salt, Dextrose, Cornstarch, Lemon Juice Concentrate, Carob Bean Gum, Agar, Lemon Oil, Sodium Citrate, Sodium Phosphate (preservative), Potassium Bitartrate, Artificial Color (yellow 5, Yellow 6), Apple Cider Vinegar, Preserved With Sorbic Acid And Calcium Propionate.",
		"CARBONATED WATER, CITRIC ACID, TAURINE, SODIUM BICARBONATE, MAGNESIUM CARBONATE, CAFFEINE, ACESULFAME K, ASPARTAME, NIACINAMIDE, CALCIUM PANTOTHENATE, PYRIDOXINE HCL, VITAMIN B12, XANTHAN GUM, NATURAL AND ARTIFICIAL FLAVORS, COLORS.",
  ];

  let foodList = [];

  ingredientStrings.forEach(string => {
	  let ingredientsList = cleanIngredientString(string);

	  foodList.push(ingredientsList);
  });

  return foodList;
}




function cleanIngredientString(s) {
	// Convert to lowercase
	s = s.toLowerCase();

	// Flatten Nested string
	const r1 = /\s\(/g; // detect opening parenthesis
	const r2 = /\)/g; // detect closing parenthesis

	// Remove brackets
	const r2a = /\s\[/g // detect opening brackets
	const r2b = /\]/g // detect closing brackets

	// Strip unnessary language (regex to accommodate variable percentages)
	const r3 = /(contains .+ or less of(:?)(\s?))|(contains \d% or less of(:?)(\s?))|(contains less than \d% of(:?)(\s?))|(contains less than \d%(:?)(\s?))|(contains one or more of(:?)(\s?))|(each of the following(:?)(\s?))|(the following(:?)(\s?))/g;

	// Replace any remaining colons with commas
	const r4 = /:\s/g;

	// Replace all periods that have another occurance following (not the last period), with a ","
	const r5 = /[.](?=.*[.,])/g;

	// Strip the last period in the string
	const r6 = /\.$/g;

	// Fix "AND" instances
	const r7 = /(, and )/g;
	const r8 = /( and )/g;

	// Strip *
	const r9 = /\*/g;

	// Remove space between comma and item
	const r10 = /(, )/g;

	// Replace semicolon with comma
	const r11 = /;/g;

	// Replace " - " with ","
	const r12 = /( - )/g;

	// Replace double commas with single
	const r13 = /\,\,/g;

	// Perform the replacements on the string
	s = s.replace(r1, ",")
		.replace(r2, ",")
		.replace(r2a, ",")
		.replace(r2b, "")
		.replace(r3, "")
		.replace(r4, ",")
		.replace(r5, ",")
		.replace(r6, "")
		.replace(r7, ",")
		.replace(r8, ",")
		.replace(r9, "")
		.replace(r10, ",")
		.replace(r11, ",")
		.replace(r12, ",")
		.replace(r13, ",");

	// Split the string into an array
	let ingArray = s.split(",");

	return ingArray;
}