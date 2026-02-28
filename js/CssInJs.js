const sections = document.getElementsByTagName('section');
// console.log(sections);
for (const section of sections) {
  console.log(section);

  section.style.border = '2px solid green';
  section.style.borderRadius = '5px';
  section.style.backgroundColor = 'lightgray';
  section.style.padding = '10px';
  section.style.marginBottom = '10px';
  
}