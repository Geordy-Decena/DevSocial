import React, { Fragement, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import PostItem from '../posts/PostItem'
import { getPost } from '../../actions/post'

const Post = ({ getPost, post: { post, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id)
    }, [getPost])
    return loading || post === null ? <Spinner /> : <Fragment>
        <PostItem post={post} showActions={false} />
    </Fragment>
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    post: state.post
})

export default connect(mapStatetoProps, { getPost })(Post)