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
      v-if="userPage"
      class="
        cardsContainer
        productsContainer
        d-flex
        flex-wrap
        justify-content-center
      "
    >
      <div
        v-for="user in users"
        v-bind:key="user._id"
        class="cards d-flex flex-column"
      >
        <h4><b>Username:</b> {{ user.username }}</h4>
        <h5><b>ID:</b> {{ user._id }}</h5>
        <p><b>Email:</b> {{ user.email }}</p>
        <p><b>Role:</b> {{ user.role }}</p>
        <p><b>Cart items:</b> {{ user.cart.length }}</p>

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
            data-bs-target="#removeUserstaticBackdrop"
            @click="activeUser = user._id"
          >
            REMOVE
          </button>
        </div>
      </div>
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
            @click="activeProduct = prd"
          >
            EDIT
          </button>
          <button
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#removestaticBackdrop"
            @click="activeProduct = prd"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="commentPage"
      class="
        cardsContainer
        productsContainer
        d-flex
        flex-wrap
        justify-content-center
      "
    >
      <div
        v-for="comment in comments"
        v-bind:key="comment._id"
        class="cards d-flex flex-column"
      >
        <h4><b>Username:</b> {{ comment.name }}</h4>
        <p><b>Email:</b> {{ comment.email }}</p>
        <p><b>Message:</b> {{ comment.message }}</p>
      </div>
    </div>
  </div>

  <!-- Remove user modal -->
  <div
    class="modal fade"
    id="removeUserstaticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Delete User</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Are you sure that you want to delete this user ?</p>
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
            class="btn btn-danger"
            data-bs-dismiss="modal"
            @click="removeUser()"
          >
            Yes, remove user
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Remove user modal -->

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
    <div class="modal-dialog modal-dialog-centered">
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
        <div class="modal-body">
          <label for="title">Title</label>
          <input
            id="title"
            type="text"
            class="form-control"
            placeholder="Product title"
            v-model="addTitle"
          />
          <label for="category">Category</label>
          <input
            id="category"
            type="text"
            class="form-control"
            placeholder="Product category"
            v-model="addCategory"
          />
          <label for="description">Description</label>
          <textarea
            id="description"
            type="text"
            class="form-control"
            placeholder="Product description"
            v-model="addDescription"
          ></textarea>
          <label for="price">Price</label>
          <input
            id="price"
            type="text"
            class="form-control"
            placeholder="Product price"
            v-model="addPrice"
          />
          <label for="image1">First image</label>
          <input
            id="image1"
            type="text"
            class="form-control prdImages"
            placeholder="First product image"
            v-model="addImg1"
          />
          <label for="image2">Second image</label>
          <input
            id="image2"
            type="text"
            class="form-control prdImages"
            placeholder="Second product image"
            v-model="addImg2"
          />
          <label for="image3">Third image</label>
          <input
            id="image3"
            type="text"
            class="form-control prdImages"
            placeholder="Third product image"
            v-model="addImg3"
          />
          <label for="image4">Fourth image</label>
          <input
            id="image4"
            type="text"
            class="form-control prdImages"
            placeholder="Fourth product image"
            v-model="addImg4"
          />
          <label for="image4">Fifth image</label>
          <input
            id="image5"
            type="text"
            class="form-control prdImages"
            placeholder="Fifth product image"
            v-model="addImg5"
          />
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
            @click.prevent="addProduct()"
          >
            Add Product
          </button>
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
    <div class="modal-dialog modal-dialog-centered">
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
            class="btn btn-danger"
            data-bs-dismiss="modal"
            @click="removeProduct()"
          >
            Yes, remove product
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
    <div class="modal-dialog modal-dialog-centered">
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
        <div class="modal-body">
          <label for="title">Title</label>
          <input
            id="title"
            type="text"
            class="form-control"
            placeholder="Product title"
            v-model="activeProduct.title"
          />
          <label for="category">Category</label>
          <input
            id="category"
            type="text"
            class="form-control"
            placeholder="Product category"
            v-model="activeProduct.category"
          />
          <label for="description">Description</label>
          <textarea
            id="description"
            type="text"
            class="form-control"
            placeholder="Product description"
            v-model="activeProduct.description"
          ></textarea>
          <label for="price">Price</label>
          <input
            id="price"
            type="text"
            class="form-control"
            placeholder="Product price"
            v-model="activeProduct.price"
          />
          <div v-if="activeProduct.images">
            <label for="image1">First image</label>
            <input
              id="image1"
              type="text"
              class="form-control prdImages"
              placeholder="First product image"
              :value="
                activeProduct.images.length > 0 ? activeProduct.images[0] : ''
              "
            />
            <label for="image2">Second image</label>
            <input
              id="image2"
              type="text"
              class="form-control prdImages"
              placeholder="Second product image"
              :value="
                activeProduct.images.length > 1 ? activeProduct.images[1] : ''
              "
            />
            <label for="image3">Third image</label>
            <input
              id="image3"
              type="text"
              class="form-control prdImages"
              placeholder="Third product image"
              :value="
                activeProduct.images.length > 2 ? activeProduct.images[2] : ''
              "
            />
            <label for="image4">Fourth image</label>
            <input
              id="image4"
              type="text"
              class="form-control prdImages"
              placeholder="Fourth product image"
              :value="
                activeProduct.images.length > 3 ? activeProduct.images[3] : ''
              "
            />
            <label for="image4">Fifth image</label>
            <input
              v-if="activeProduct.images.length > 0"
              id="image5"
              type="text"
              class="form-control prdImages"
              placeholder="Fifth product image "
              :value="
                activeProduct.images.length > 4 ? activeProduct.images[4] : ''
              "
            />
          </div>
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
            @click="updateProduct()"
          >
            Update product
          </button>
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
  data() {
    return {
      users: [],
      products: [],
      comments: [],

      userPage: true,
      productPage: false,
      commentPage: false,

      activeUser: "",
      activeProduct: "",

      // add product

      addTitle: "",
      addPrice: "",
      addCategory: "",
      addDescription: "",
      addImg1: "",
      addImg2: "",
      addImg3: "",
      addImg4: "",
      addImg5: "",
    };
  },
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

    async addProduct() {
      let tmpImg = [
        this.addImg1,
        this.addImg2,
        this.addImg3,
        this.addImg4,
        this.addImg5,
      ];
      let imgs = [];
      tmpImg.forEach((el) => {
        if (el.length > 0) {
          imgs.push(el);
        }
      });
      let obj = {
        title: this.addTitle,
        price: this.addPrice,
        category: this.addCategory,
        description: this.addDescription,
        images: imgs,
      };
      await axios
        .post(`/product/addproduct`, {
          headers: { Authentication: localStorage.getItem("token") },
          body: obj,
        })
        .then(async () => {
          let updated = await axios.get("/product");
          this.products = updated.data;
        });
    },
    async removeProduct() {
      await axios
        .delete(`/product/${this.activeProduct._id}`, {
          headers: { Authentication: localStorage.getItem("token") },
        })
        .then(async () => {
          let updated = await axios.get("/product");
          this.products = updated.data;
        });
    },
    async updateProduct() {
      let imgs = [];
      let domImgs = document.querySelectorAll(".prdImages");
      domImgs.forEach((img) => {
        if (img.value.length > 0) {
          imgs.push(img.value);
        }
      });
      let obj = {
        title: this.activeProduct.title,
        price: this.activeProduct.price,
        description: this.activeProduct.description,
        category: this.activeProduct.category,
        images: imgs,
      };
      let id = this.activeProduct._id;
      await axios
        .put(`/product/${id}`, {
          headers: {
            Authentication: localStorage.getItem("token"),
          },
          body: obj,
        })
        .then(async () => {
          let updated = await axios.get("/product");
          this.products = updated.data;
          console.log(updated.data);
        });
    },
    async removeUser() {
      await axios
        .delete(`/user/deleteuser?userid=${this.activeUser}`, {
          headers: { Authentication: localStorage.getItem("token") },
        })
        .then(async () => {
          let updated = await axios.get("/user/users");
          this.users = updated.data;
        });
    },
  },
  async created() {
    let users = await axios.get("/user/users", {
      headers: { Authentication: localStorage.getItem("token") },
    });
    this.users = users.data;
    let prds = await axios.get("/product");
    this.products = prds.data;
    let cmt = await axios.get("/contact");
    this.comments = cmt.data;
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
.modal-dialog label {
  display: block;
  margin: 20px 0 10px 0;
}
.modal-dialog textarea {
  min-height: 150px;
}
</style>
