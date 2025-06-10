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

const addProject = async (data: IProjectData) => {
  const slug = slugify(data.title, { lower: true, strict: true });

  const exists = await Project.findOne({ where: { slug } });
  if (exists) {
    throw new Error("Project with this slug already exists.");
  }

  const project = await Project.create({
    title: data.title,
    slug: slug,
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


export default {addProject, updateProject}