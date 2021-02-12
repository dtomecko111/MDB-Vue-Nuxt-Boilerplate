<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <OwlCP />
    <div class="row py-4">
      <div class="col-md-6">
        <!-- Home Card -->
        <div class="card card-horizontal">
          <div class="card__half">
            <div class="card__icon">
              <i class="fas fa-fw fa-user-alt" />
            </div>
          </div>

          <div class="card__half">
            <div class="card-body">
              <h3>My Account</h3>
              <p>
                Phasellus ullamcorper ante in lorem auctor blandit. Etiam
                aliquet vestibulum erat mollis ornare. Integer eu urna in risus
                stempor non sit amet diam.
              </p>
              <nuxt-link to="/customer/account">
                <a class="btn btn-secondary">View Account</a>
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- end Home Card -->
      </div>

      <div class="col-md-6">
        <!-- Home Card -->
        <div class="card card-horizontal">
          <div class="card__half">
            <div class="card__icon">
              <i class="fas fa-fw fa-file-contract" />
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
              <nuxt-link to="/customer/contracts">
                <a class="btn btn-secondary">View Contracts</a>
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- end Home Card -->
      </div>

      <div class="col-md-6">
        <!-- Home Card -->
        <div class="card card-horizontal">
          <div class="card__half">
            <div class="card__icon">
              <i class="fas fa-fw fa-file" />
            </div>
          </div>

          <div class="card__half">
            <div class="card-body">
              <h3>Documents</h3>
              <p>
                Phasellus ullamcorper ante in lorem auctor blandit. Etiam
                aliquet vestibulum erat mollis ornare. Integer eu urna in risus
                stempor non sit amet diam.
              </p>
              <nuxt-link to="/customer/documents">
                <a class="btn btn-secondary">View Documents</a>
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- end Home Card -->
      </div>

      <div class="col-md-6">
        <!-- Home Card -->
        <div class="card card-horizontal">
          <div class="card__half">
            <div class="card__icon">
              <i class="fas fa-fw fa-user-friends" />
            </div>
          </div>

          <div class="card__half">
            <div class="card-body">
              <h3>Refer a Friend</h3>
              <p>
                Phasellus ullamcorper ante in lorem auctor blandit. Etiam
                aliquet vestibulum erat mollis ornare. Integer eu urna in risus
                stempor non sit amet diam.
              </p>
              <nuxt-link to="/customer/refer-a-friend">
                <a class="btn btn-secondary">Refer a Friend</a>
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- end Home Card -->
      </div>
    </div>
  </div>
  <!-- /.container-fluid -->
</template>

<style>
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
