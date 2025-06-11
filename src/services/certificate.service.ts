import Certificate from "../models/certificate.model";

interface IDate {
  certificateName: string;
  institute: string;
  startedDate: Date;
  duration: string;
  status?: string;
  certificateImage?: string;
  description?: any;
}

// Add certificate
const addCertificate = async (data: IDate) => {
  const certificate = await Certificate.create({
    certificateName: data.certificateName,
    institute: data.institute,
    startedDate: data.startedDate,
    duration: data.duration,
  });

  return certificate;
};

// get All certificate
const getAllCertificate = async () => {
  return await Certificate.findAll();
};

// Get single certificate
const getSingeCertificate = async (id: any) => {
  return await Certificate.findByPk(id);
};

// update certificate
const updateCertificate = async (data: IDate, id: any) => {
  const certificate = await Certificate.update(data, { where: { id: id } });
  if (!certificate) {
    throw { statu: 400, message: `${id} is not found` };
  }
  return certificate;
};

// delete certificate
const deleteCertificate = async (id: any) => {
  return await Certificate.destroy({ where: { id: id } });
};

export default {
  addCertificate,
  getAllCertificate,
  getSingeCertificate,
  updateCertificate,
  deleteCertificate,
};
