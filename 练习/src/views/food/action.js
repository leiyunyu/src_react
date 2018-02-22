function mapDispatchToProps(dispatch){
    return {
        updata_getfood: function(data){
            dispatch({
                type: 'updata_getfood',
                data: data
            })
        }
    }
}
export default mapDispatchToProps;