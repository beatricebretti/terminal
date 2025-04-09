const projects = [
    {
        id: 1,
        title: "Project 1 Title",
        description: "A project description",
        image: "assets/project1/Visma.jpg",
        tech: "React Native, Firebase, Figma..",
        challenges: "One challenge was ....",
        links: '<a href="#" class="nav-link">Demo</a> | <a href="#" class="nav-link">GitHub</a>'
    },
    {
        id: 2,
        title: "Project 2 Title",
        description: "A project description.",
        image: "assets/project2/WoT.jpg",
        tech: "HTML, CSS, JavaScript, Shopify...",
        challenges: "A key challenge ...",
        links: '<a href="#" class="nav-link">Live Site</a> | <a href="#" class="nav-link">Case Study</a>'
    }
    // Add more projects here as needed C: need to add a coma 
];

// Function to populate the project grid
function populateProjectGrid() {
    const projectGrid = document.getElementById('projectGrid');
    projects.forEach((project, index) => {
        const projectCard = document.createElement('a');
        projectCard.href = `project-detail.html?id=${project.id}`;
        projectCard.className = 'project-card fade-in';
        projectCard.style.setProperty('--delay', `${0.2 * (index + 1)}s`); 
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="img-fluid">
            <h5>${project.title}</h5>
            <p>${project.description}</p>
        `;
        projectGrid.appendChild(projectCard);
    });
}
document.addEventListener('DOMContentLoaded', populateProjectGrid);

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

const project = projects[projectId];
if (project) {
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('project-image').src = project.image;
    document.getElementById('project-tech').textContent = project.tech;
    document.getElementById('project-challenges').textContent = project.challenges;
    document.getElementById('project-links').innerHTML = project.links;
} else {
    document.getElementById('project-details').innerHTML = '<p>Project not found.</p>';
}

