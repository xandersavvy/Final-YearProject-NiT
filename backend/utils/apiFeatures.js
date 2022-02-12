class ApiFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    searchByName() {
        const name = this.queryString.name? 
                        { name: { $regex: `.*${this.queryString.name}.*` , $options : `i` } ,} 
                        : {};
        this.query = this.query.find({...name});
        return this;
    }
    searchById() {
        const id = this.queryString.id? 
                        { _id:  { $regex : this.queryString.id , $options : `i` } ,}
                        : {};
        this.query = this.query.find({...id});
        return this;
    }
    searchByEmail() {
        const email = this.queryString.email?
                        { email: { $regex: `.*${this.queryString.email}.*` , $options : `i` } ,}
                        : {};
        this.query = this.query.find({...email});
        return this;
    }
    sort(){
        const sortBy = this.queryString.sortBy? this.queryString.sortBy : '_id';
        const order = this.queryString.order? this.queryString.order : -1;
        this.query = this.query.sort({[sortBy]: order});
        return this;    
    }
    paginate(limit = 30, page = 1){
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);
        return this;
    }
    filter(){
        const filters = {
            ...this.queryString.filter
        };
        const excludedFields = ['page', 'limit', 'sortBy', 'order', 'filter'];
        excludedFields.forEach(el => delete filters[el]);
        let queryStr = JSON.stringify(filters); //convert queryObj to string 
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`); //replace gte, gt, lte, lt with $gte, $gt, $lte, $lt
        this.query = this.query.find(JSON.parse(queryStr)); //convert string to object
        return this;
    }
}

module.exports = ApiFeatures;