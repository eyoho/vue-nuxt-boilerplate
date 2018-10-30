import axios from 'axios'
// https://github.com/robsontenorio/vue-api-query
import { Model } from 'vue-api-query'

export default () => {
  Model.$http = axios
}
