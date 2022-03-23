<template>
  <div class="container mainContainer">
    <h3>Dashboard</h3>
    <hr />
    <div class="buttonsContainer d-flex justify-content-center">
      <button
        class="btn btn-primary"
        :class="userPage ? '' : 'notActive'"
        @click.prevent="changeLayout('users')"
      >
        Users
      </button>
      <button
        class="btn btn-primary"
        :class="productPage ? '' : 'notActive'"
        @click.prevent="changeLayout('products')"
      >
        Products
      </button>
      <button
        class="btn btn-primary"
        :class="commentPage ? '' : 'notActive'"
        @click.prevent="changeLayout('comment')"
      >
        Comments
      </button>
    </div>
    <div
      v-if="productPage"
      class="
        cardsContainer
        productsContainer
        d-flex
        flex-wrap
        justify-content-center
      "
    >
      <div class="addButton-container">
        <button
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          ADD PRODUCT
        </button>
      </div>
      <div
        v-for="prd in products"
        v-bind:key="prd._id"
        class="cards d-flex flex-column"
      >
        <h4><b>Title:</b> {{ prd.title }}</h4>
        <h5><b>ID:</b> {{ prd._id }}</h5>
        <p><b>Category:</b> {{ prd.category }}</p>
        <p><b>Description:</b> {{ prd.description }}</p>
        <p><b>Price:</b> {{ prd.price }} €</p>
        <div class="imgContainer d-flex">
          <div
            v-for="img in prd.images"
            v-bind:key="img._id"
            class="
              imgContainer-img
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <img :src="img" alt="" />
          </div>
        </div>
        <div class="actionButtons d-flex justify-content-end">
          <button
            class="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#editstaticBackdrop"
            @click="activeProduct = prd._id"
          >
            EDIT
          </button>
          <button
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#removestaticBackdrop"
            @click="activeProduct = prd._id"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Add product modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Add Product</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Add product modal -->

  <!-- Remove product modal -->
  <div
    class="modal fade"
    id="removestaticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Remove Product</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Are you sure that you want to remove this product ?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="removeProduct()"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Remove product modal -->

  <!-- Edit product modal -->
  <div
    class="modal fade"
    id="editstaticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Edit Product</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Edit product modal -->
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "DashboardCmp",
  props: {},
  components: {},
  methods: {
    changeLayout(page) {
      if (page == "users") {
        this.userPage = true;
        this.productPage = false;
        this.commentPage = false;
      } else if (page == "products") {
        this.userPage = false;
        this.productPage = true;
        this.commentPage = false;
      } else if (page == "comment") {
        this.userPage = false;
        this.productPage = false;
        this.commentPage = true;
      }
    },

    async removeProduct() {
      await axios
        .delete(`/product/${this.activeProduct}`, {
          headers: { Authentication: localStorage.getItem("token") },
        })
        .then(async () => {
          let updated = await axios.get("/product");
          this.products = updated.data;
        });
    },
  },
  data() {
    return {
      products: [],
      userPage: true,
      productPage: false,
      commentPage: false,

      activeProduct: "",
    };
  },
  async created() {
    let result = await axios.get("/product");
    this.products = result.data;
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
};
</script>

<style scoped>
.mainContainer {
  padding: 20px 0;
  text-align: center;
}
.buttonsContainer {
  gap: 20px;
}
.buttonsContainer .btn {
  display: inline-block;
  width: 120px;
  text-align: center;
}
.buttonsContainer .btn.notActive {
  border: 1px solid #0d6efd;
  color: #0d6efd;
  background-color: #fff;
}
.cardsContainer {
  margin: 20px 0px 10px 0px;
  padding: 20px;
  gap: 20px;
}
.addButton-container {
  width: 100%;
}
.cardsContainer .cards {
  position: relative;
  width: 45%;
  border: 1px solid #c8c9ca;
  border-radius: 15px;
  text-align: left;
  padding: 20px;
}
.cardsContainer .cards h4 {
  font-size: 18px;
}
.cardsContainer .cards h5 {
  font-size: 16px;
}
.imgContainer {
  margin-top: auto;
}
.imgContainer-img {
  width: 80px;
  height: 80px;
}
.imgContainer-img img {
  max-height: 100%;
  max-width: 100%;
}
.actionButtons .btn {
  color: #fff !important;
  display: inline-block;
  width: 120px;
  text-align: center;
}
.actionButtons .btn:first-child {
  margin-right: 10px;
}
</style>
