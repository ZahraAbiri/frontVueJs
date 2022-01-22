import http from "../http-common";

class CustomerDataService {
    getCustomer(){
        return http.get("api/v1/employees");
    }
    getAllCustomer() {
        return http.get("api/v1/employees");
    }

    getCustomerById(id) {
        return http.get(`api/v1/employeees/${id}`);
    }

    createCustomer(data) {

        // return ("http://localhost:8080/cus/customers", data);
        return http.post(`/cus/customers`, data);
    }


    updateCustomer(id, data) {
        console.log("update : "+id+"data : "+data);
        return http.put(`api/v1/employees/${id}`,data);
    }

    deleteCustomer(id) {
        console.log("id@@@@@@@" + id);
        return http.delete(`api/v1/employees/${id}`);
    }

    deleteAllCustomer() {
        return http.delete(`api/v1/employeesDelete`);
    }

}

export default new CustomerDataService();