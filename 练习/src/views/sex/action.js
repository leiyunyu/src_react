function mapDispatchToProps(dispatch){
    return {
        updata_getsex: function(data){
            dispatch({
                type: 'updata_getsex',
                data: data
            })
        }
    }
}
export default mapDispatchToProps;