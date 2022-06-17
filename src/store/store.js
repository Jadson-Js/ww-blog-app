// IMPORTS TO SETUP OF STORE
import { createStore } from 'vuex'

// IMPORT OF MODULES
import noticesModule from './modules/noticesModule'
import categoriesModule from './modules/categoriesModule'
import adminModule from './modules/adminModule'

// CREATE THE STORE
export default createStore({ 
  modules: { // Modules of store
    noticesModule,
    categoriesModule,
    adminModule
  }
})