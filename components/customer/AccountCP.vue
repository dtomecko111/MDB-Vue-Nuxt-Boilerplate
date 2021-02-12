<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="card primary-header">
      <div class="card-body">
        <h1 class="h1 mb-4 text-white">My Account</h1>
        <p>
          Phasellus ullamcorper ante in lorem auctor blandit. Etiam aliquet
          vestibulum erat mollis ornare. Integer eu urna in risus stempor non
          sit amet diam. Aliquam congue sit amet urna ac malesuada. varius
          natoque penatibus et magnis.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <form>
          <h3 class="py-4">Update Your Personal Information</h3>

          <!-- Name -->
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Name:</label>
            <div class="col-sm-6">
              <input id="name" type="text" class="form-control" />
            </div>
          </div>

          <!-- Email -->
          <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label">Email:</label>
            <div class="col-sm-6">
              <input id="email" type="email" class="form-control" />
            </div>
          </div>

          <!-- Phone -->
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">Phone:</label>
            <div class="col-sm-6">
              <input id="phone" type="phone" class="form-control" />
            </div>
          </div>

          <h3 class="py-4">Update Password</h3>

          <!-- Password -->
          <div class="form-group row">
            <label for="current-password" class="col-sm-2 col-form-label"
              >Password:</label
            >
            <div class="col-sm-6">
              <input
                id="current-password"
                type="password"
                class="form-control"
              />
            </div>
          </div>

          <!-- New Password -->
          <div class="form-group row">
            <label for="new-password" class="col-sm-2 col-form-label"
              >New Password:</label
            >
            <div class="col-sm-6">
              <input id="new-password" type="password" class="form-control" />
            </div>
          </div>

          <!-- New Password -->
          <div class="form-group row">
            <label for="confirm-password" class="col-sm-2 col-form-label"
              >Confirm Password:</label
            >
            <div class="col-sm-6">
              <input
                id="confirm-password"
                type="password"
                class="form-control"
              />
            </div>
          </div>

          <div class="form-group py-4">
            <p>
              <strong
                >Yes! I would like to receive promotional alerts and messages
                from Clearview Energy.</strong
              >
            </p>
            <div class="form-check form-check-inline">
              <input
                id="contact-email"
                class="form-check-input"
                type="checkbox"
                value="Contact me by email"
              />
              <label class="form-check-label" for="contact-email"
                >Contact me by email</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                id="contact-txt"
                class="form-check-input"
                type="checkbox"
                value="Contact me by text"
              />
              <label class="form-check-label" for="contact-email"
                >Contact me by text</label
              >
            </div>
          </div>
          <!-- formgroup -->

          <button type="submit" class="btn btn-secondary" style="width: auto">
            Update your information
          </button>
        </form>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
</template>

<style></style>
