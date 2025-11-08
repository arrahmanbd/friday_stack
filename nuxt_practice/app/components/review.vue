<template>
  <section class="py-5 bg-light border-top">
    <div class="container">
      <header class="mb-4 text-center">
        <h2 class="fw-semibold text-dark">Product Reviews</h2>
        <p class="text-muted mb-0">What our customers are saying</p>
      </header>

      <div class="row g-4">
        <!-- Example Review Card -->
        <div class="col-md-4">
          <div class="card shadow-sm border-0 h-100">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <img
                  src="https://picsum.photos/200/300"
                  class="rounded-circle me-3" style="width:40px; height:40px"
                  alt="User Avatar"
                />
                <div>
                  <h6 class="mb-0 fw-bold">John Doe</h6>
                  <small class="text-muted">Verified Buyer</small>
                </div>
              </div>
              <p class="text-muted">
                “Excellent quality and fast delivery! I’m very happy with my
                purchase.”
              </p>
              <div class="text-warning">
                ★★★★☆
              </div>
            </div>
          </div>
        </div>

        <!-- Add more review cards as needed -->
      </div>
    </div>
  </section>
</template>
