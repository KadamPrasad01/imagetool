import axios from "axios";

export const searchImages = async (req, res) => {
  const { term } = req.body;
  if (!term) return res.status(400).json({ error: "Search term required" });

  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term, per_page: 20 },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });

    const images = response.data.results.map((img) => ({
      id: img.id,
      url: img.urls.small,
      description: img.alt_description,
      user: img.user.name,
    }));

    res.json({ term, count: images.length, images });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch from Unsplash API" });
  }
};
