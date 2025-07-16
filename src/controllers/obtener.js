export const obtener = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 50;

  const skip = (page - 1) * limit;

  try {
    const [items, total] = await Promise.all([
      Inventario.find({ estado: "inventario" }).skip(skip).limit(limit),
      Inventario.countDocuments({ estado: "inventario" })
    ]);

    res.json({
      items,
      total,
      page,
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error("❌ Error al obtener el inventario:", error.message);
    res.status(500).json({ error: "Error al obtener el inventario" });
  }
};