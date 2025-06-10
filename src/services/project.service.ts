import { AutoIncrement } from "sequelize-typescript";
import Project from "../models/project.model";
import slugify from "slugify";

interface IProjectData {
  title: string;
  slug?: string; // generated automatically
  description: string;
  thumbnailUrl: string;
  technologies: string[];
  category: string[];
  tags: string[];
  gallery?: string[];
  websiteUrl?: string[];
  githubUrl?: string[];
  startDate?: Date;
  endDate?: Date;
}

const generateUniqueSlug = async (baseSlug: string): Promise<string> => {
  let slug = baseSlug;
  let counter = 1;

  while (await Project.findOne({ where: { slug } })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  return slug;
};

const addProject = async (data: IProjectData) => {
  const baseSlug = slugify(data.title, { lower: true, strict: true });
  const uniqueSlug = await generateUniqueSlug(baseSlug)

  const project = await Project.create({
    title: data.title,
    slug: uniqueSlug,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl,
    technologies: data.technologies,
    category: data.category,
    tags: data.tags,
    gallery: data.gallery || [],
    websiteUrl: data.websiteUrl || [],
    githubUrl: data.githubUrl || [],
    startDate: data.startDate || null,
    endDate: data.endDate || null,
  });

  return project;
};

//updateProject
const updateProject = async(data:IProjectData, id:any) =>{
  const update = await Project.update(data, {where:{id:id}})
  if(!update) {
    throw {status: 404, messag:`${data.title} is not found`}
  }
  return update;
}

const getAllProject = async()=> {
  return await Project.findAll()
}


export default {addProject, updateProject, getAllProject}