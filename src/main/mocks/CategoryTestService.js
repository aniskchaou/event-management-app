const _category = []

const getAll = () => {
    return _category;
};

const get = id => {
    return _category.find(item => item.id === id);
};

const create = (data) => {
    _category.push(data);
};

const update = (old, data) => {

    var foundIndex = _category.findIndex(item => item === old);
    _category[foundIndex] = data;
};

const remove = id => {
    _category.splice(id, 1);
};

const removeAll = () => {

};

const findByTitle = title => {

};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};