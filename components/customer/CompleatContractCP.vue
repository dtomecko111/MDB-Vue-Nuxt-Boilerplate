<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="card primary-header">
      <div class="card-body">
        <h1 class="h1 mb-4 text-white">Complete Your Contracts</h1>
        <p>
          Phasellus ullamcorper ante in lorem auctor blandit. Etiam aliquet
          vestibulum erat mollis ornare. Integer eu urna in risus stempor non
          sit amet diam. Aliquam congue sit amet urna ac malesuada. varius
          natoque penatibus et magnis.
        </p>
      </div>
    </div>
    <div class="row py-4">
      <div class="col-md-6">
        <!-- Home Card -->
        <div class="card">
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            Provide Your Account Number
          </div>
          <div class="card-body">
            <div class="alert alert-light acc-num d-flex" role="alert">
              <i class="fas fa-info-circle"></i>
              <span class="small"
                >Your 11-digit account number is located on the first page in
                the upper right corner of your utility bill. Please omit spaces
                and dashes when entering this number.</span
              >
            </div>
            <form>
              <div class="form-group">
                <label for="account-number">Account Numbers</label>
                <input
                  id="account-number"
                  type="text"
                  class="form-control"
                  placeholder="000-000-0000"
                />
              </div>
              <button type="submit" class="btn btn-secondary">
                Update your information
              </button>
            </form>
          </div>
        </div>
        <!-- end Home Card -->
      </div>

      <div class="col-md-6">
        <!-- Home Card -->
        <div class="card card-horizontal">
          <div class="card__half">
            <div class="card__icon">
              <i class="fas fa-fw fa-file-contract"></i>
            </div>
          </div>

          <div class="card__half">
            <div class="card-body">
              <h3>Contracts</h3>
              <p>
                Phasellus ullamcorper ante in lorem auctor blandit. Etiam
                aliquet vestibulum erat mollis ornare. Integer eu urna in risus
                stempor non sit amet diam.
              </p>
              <a href="contracts.html" class="btn btn-secondary"
                >View Contracts</a
              >
            </div>
          </div>
        </div>
        <!-- end Home Card -->
      </div>
    </div>
  </div>
  <!-- /.container-fluid -->
</template>

<script>
export default {};
</script>

<style></style>
