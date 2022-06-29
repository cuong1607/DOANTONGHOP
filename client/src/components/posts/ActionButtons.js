import Button from 'react-bootstrap/Button'
import playIcon from '../../assets/play-btn.svg'
import editIcon from '../../assets/pencil.svg'
import deleteIcon from '../../assets/trash.svg'
import { PostContext } from '../../contexts/PostContext'
import { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import './styles.css'
import TextEditor from '../layout/TextEditor'

const ActionButtons = ({ url, _id }) => {
	const [show, setShow] = useState(false)
	const { deletePost, findPost, setShowUpdatePostModal } = useContext(
		PostContext
	)
	
	const choosePost = postId => {
		findPost(postId)
		setShowUpdatePostModal(true)
	}
	const onClickPlay = () => {
		setShow(true)
	}
	const idvideo = url.indexOf("=")
	const urlID = url.substring(idvideo + 1, idvideo + 12)
	console.log("abc", urlID)
	return (
		<>
			<Button className='post-button' target='_blank' onClick={() => onClickPlay()}>
				<img src={playIcon} alt='play' width='32' height='32' />
			</Button>

			<Button className='post-button' onClick={choosePost.bind(this, _id)}>
				<img src={editIcon} alt='edit' width='24' height='24' />
			</Button>
			<Button className='post-button' onClick={deletePost.bind(this, _id)}>
				<img src={deleteIcon} alt='delete' width='24' height='24' />
			</Button>
			<Modal className='modal_block' size='xl' show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Thông tin bài học</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='block-youtube'>
						<iframe allowfullscreen={true} width='60%' height='100%' src={`https://youtube.com/embed/${urlID}`} title="abc" ></iframe>
						<TextEditor />
					</div>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default ActionButtons
