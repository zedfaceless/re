document.addEventListener('DOMContentLoaded', () => {
  const membersUrl = 'data/member.json';
  const membersContainer = document.getElementById('members-container');
  const gridViewBtn = document.getElementById('grid-view');
  const listViewBtn = document.getElementById('list-view');
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.querySelector('.nav-menu');

  // Fetch and display members
  fetch(membersUrl)
    .then(response => response.json())
    .then(data => displayMembers(data))
    .catch(error => console.error('Error fetching members:', error));

  // Display members function
  function displayMembers(members) {
    membersContainer.innerHTML = '';
    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');
      
      card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <div class="member-info">
          <h3>${member.name}</h3>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> <a href="tel:${member.phone}">${member.phone}</a></p>
          <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p><strong>Membership Level:</strong> ${getMembershipLevel(member.level || member.membership_level)}</p>
        </div>
      `;
      
      membersContainer.appendChild(card);
    });
  }

  // Get membership level text
  function getMembershipLevel(level) {
    switch(level) {
      case 1:
        return 'Member';
      case 2:
        return 'Silver';
      case 3:
        return 'Gold';
      default:
        return 'Member';
    }
  }

  // Toggle view functions
  gridViewBtn.addEventListener('click', () => {
    membersContainer.classList.remove('list-view');
    membersContainer.classList.add('grid-view');
    gridViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
  });
  
  listViewBtn.addEventListener('click', () => {
    membersContainer.classList.remove('grid-view');
    membersContainer.classList.add('list-view');
    listViewBtn.classList.add('active');
    gridViewBtn.classList.remove('active');
  });
  

  // Toggle navigation menu on mobile
  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked (optional)
  navMenu.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
      navMenu.classList.remove('active');
    }
  });

  // Footer - Last Modified & Year
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = new Date(document.lastModified).toLocaleDateString();
});
