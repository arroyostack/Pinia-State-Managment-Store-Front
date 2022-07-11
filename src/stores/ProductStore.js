import {
  defineStore
} from "pinia";
import {
  projectFirestore
} from "@/Firebase/config";


export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    async fill() {
      const res = await projectFirestore.collection('products').get()
      this.products = res.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      // this.products = (await import("@/data/products.json")).default;
    },
  },
  // getters
});