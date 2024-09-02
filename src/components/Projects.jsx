import React from "react";
import imageTodoListApp from "../assets/todo-list-app.png";
import movieClone from "../assets/joshbakit-movie-clone.png";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      name: "Todo List App",
      technologies: "NextJs and json-server",
      image: imageTodoListApp,
      websiteUrl: "https://todo-list-app-nextjs-jet.vercel.app/",
      githubUrl: "https://github.com/joshbakit/TodoApp-Nextjs",
    },
    {
      id: 2,
      name: "Movie Clone",
      technologies: "NextJS + API",
      image: movieClone,
      websiteUrl: "https://joshbakit-movie-clone.netlify.app/",
      githubUrl: "https://github.com/joshbakit/movie_clone",
    },
  ];

  return (
    <div id="project">
      <div className="divider divider-neutral"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-18 text-white py-10">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myProjects.map((project) => (
            <div className="card bg-slate-600 w-80 shadow-xl" key={project.id}>
              <figure className="px-10 pt-10">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{project.name}</h2>
                <p>Technology: {project.technologies}</p>

                <div className="card-actions">
                  <a
                    className="badge hover:link"
                    target="_blank"
                    href={project.websiteUrl}
                  >
                    View in website
                  </a>
                  <a
                    className="badge hover:link"
                    target="_blank"
                    href={project.githubUrl}
                  >
                    View code in github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
