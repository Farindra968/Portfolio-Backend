const generateUniqueSlug = async (baseSlug: string, Model:any): Promise<string> => {
  let slug = baseSlug;
  let counter = 1;

  while (await Model.findOne({ where: { slug } })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  return slug;
};

export default generateUniqueSlug