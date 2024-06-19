import Job from "../models/Job.model"; // Verifica la ruta

const jobs = [
  {
    name:null,
    salaryBase: 0,
    description: "",
    paymentPeriod: new Date(0, 0, 0),
  },
  {
    name: "Software Engineer",
    salaryBase: 60000,
    description: "Develop and maintain software applications.",
    paymentPeriod: new Date(),
  },
  {
    name: "Data Scientist",
    salaryBase: 70000,
    description: "Analyze and interpret complex data to help companies make decisions.",
    paymentPeriod: new Date(),
  },
  {
    name: "Project Manager",
    salaryBase: 75000,
    description: "Plan, execute, and close projects successfully.",
    paymentPeriod: new Date(),
  },
  {
    name: "Product Manager",
    salaryBase: 80000,
    description: "Oversee the development and delivery of products.",
    paymentPeriod: new Date(),
  },
  {
    name: "UI/UX Designer",
    salaryBase: 55000,
    description: "Design user interfaces and enhance user experiences.",
    paymentPeriod: new Date(),
  },
  // Añade más trabajos según sea necesario
];

const loadJobs = async (): Promise<boolean> => {
  try {
    for (const job of jobs) {
      const existingJob = await Job.findOne({ where: { name: job.name } });
      if (!existingJob) {
        await Job.create(job);
      }
    }
    console.log("Trabajos cargados exitosamente");
    return true;
  } catch (error) {
    console.error("Error al cargar los trabajos:", error);
    return false;
  }
};

export default loadJobs;
