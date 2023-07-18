window.onload = async () => {
  let reviewsContainer = document.getElementById('reviewsContainer');
  let req = await fetch(`https://reqres.in/api/users?page=1&vid=${reviewsContainer.getAttribute('variant-id')}`);
  res = await req.json();

  var reviews = res.data;
  var html = '';
  reviews.forEach(review => {
    html += `<div>
        <h4>${review.first_name} ${review.last_name}</h4>
        <div style="display:flex;">
          <img src="${review.avatar}" style="margin-right:1rem;" height="50" width="50" loading="lazy" />
          <span>Some fake review people!!. This is just test data. Nothing to see here. Move on.</span>
        </div>
      </div>`
  });
  reviewsContainer.innerHTML = html;
};
