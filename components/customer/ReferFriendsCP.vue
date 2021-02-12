<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="card primary-header">
      <div class="card-body">
        <h1 class="h1 mb-4 text-white">Refer a Friend</h1>
        <p>
          Phasellus ullamcorper ante in lorem auctor blandit. Etiam aliquet
          vestibulum erat mollis ornare. Integer eu urna in risus stempor non
          sit amet diam. Aliquam congue sit amet urna ac malesuada. varius
          natoque penatibus et magnis.
        </p>
      </div>
    </div>
    <div class="row py-4">
      <div class="col-12">
        <div class="card bg-primary">
          <div class="card-body">
            <div class="referal d-flex align-items-center">
              <i class="far fa-fw fa-check-circle mr-3"></i>
              <div class="d-flex flex-column">
                <div class="referred-by">
                  <strong>You were reffered by:</strong>
                </div>
                <div class="rferal__info">
                  friend@email.com | Clearview Customer | 00/00/0000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <!-- Home Card -->
        <div class="card">
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-center"
          >
            <i class="fas fa-fw fa-user-friends px-4"></i>Friend Information
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="first-name">First Name</label>
                <input id="first-name" type="text" class="form-control" />
              </div>

              <div class="form-group">
                <label for="last-name">Last Name</label>
                <input id="last-name" type="text" class="form-control" />
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input id="email" type="text" class="form-control" />
              </div>

              <button type="submit" class="btn btn-secondary">
                Send Referral
              </button>
            </form>
          </div>
        </div>
        <!-- end Home Card -->
      </div>

      <div class="col-md-6">
        <!-- Home Card -->
        <div class="card">
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-center"
          >
            <i class="fas fa-fw fa-user-friends px-4"></i>Did someone refer you?
            Let’s give them some credit!
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="friend-name">First Name</label>
                <input id="friend-name" type="text" class="form-control" />
              </div>

              <div class="form-group">
                <label for="friend-email">Email</label>
                <input id="friend-email" type="text" class="form-control" />
              </div>

              <div class="form-group">
                <label for="friend-phone">Phone</label>
                <input id="friend-phone" type="phone" class="form-control" />
              </div>

              <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
          </div>
        </div>
        <!-- end Home Card -->
      </div>

      <div class="col-12">
        <!-- Home Card -->
        <div class="card">
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-center"
          >
            <i class="fas fa-fw fa-user-friends px-4"></i>Referral Status
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                id="dataTable"
                class="table table-bordered"
                width="100%"
                cellspacing="0"
              >
                <thead class="thead-light">
                  <tr>
                    <th>Date</th>
                    <th>Friends Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Date</th>
                    <th>Friends Name</th>
                    <th>Status</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>01/01/2020</td>
                    <td>Mollie Fabian</td>
                    <td>
                      <i class="fas fa-long-arrow-alt-right mr-2"></i>Referal
                      Sent
                    </td>
                  </tr>
                  <tr>
                    <td>02/02/2020</td>
                    <td>Jim Kuenzer</td>
                    <td><i class="fas fa-sync-alt mr-2"></i>Pending</td>
                  </tr>
                  <tr>
                    <td>03/03/2020</td>
                    <td>Brian Fabian</td>
                    <td>
                      <i class="far fa-check-circle mr-2 text-primary"></i
                      >Joined
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.table-responsive -->
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
