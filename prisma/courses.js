import prisma from "./prisma";

// GET ALL COURSES
export const getAllCourses = async () => {
  const courses = await prisma.course.findMany({});

  return courses;
};

// GET A SINGLE COURSES
export const getCourse = async () => {
  const course = await prisma.course.findUnique({
    where: { id },
  });

  return course;
};
