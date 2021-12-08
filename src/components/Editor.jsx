import React from 'react'


function Editor({ data, setData }) {

    return (
        <section className='ms-main__editor'>
            <h4>Your details:</h4>
            <div className="rows">
                <div className='row'>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input name='name' placeholder='name' value={data.name} onChange={e => setData({ ...data, name: e.target.value })}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Job Title</label>
                        <input name='title' placeholder='job title' value={data.title} onChange={e => setData({ ...data, title: e.target.value })}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input name='phone' placeholder='phone number' value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fax">Fax</label>
                        <input name='fax' placeholder='fax' value={data.fax} onChange={e => setData({ ...data, fax: e.target.value })}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="website-name">Website name</label>
                        <input name='website-name' placeholder='website name' value={data.website.name} onChange={e => setData({ ...data, website: {...data.website, name: e.target.value} })}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="website-link">Website link</label>
                        <input name='website-link' placeholder='website link' value={data.website.link} onChange={e => setData({ ...data, website: {...data.website, link: e.target.value} })}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input name='address' placeholder='address' value={data.address} onChange={e => setData({ ...data, address: e.target.value })}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="facebook">Facebook</label>
                        <input name='facebook' placeholder='facebook link' value={data.social.fb.link} onChange={e => setData({ ...data, social: { ...data.social, fb: { ...data.social.fb, link: e.target.value } } })}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="instagram">Instagram</label>
                        <input name='instagram' placeholder='instagram link' value={data.social.ig.link} onChange={e => setData({ ...data, social: { ...data.social, ig: { ...data.social.ig, link: e.target.value } } })}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedin">LinkedIn</label>
                        <input name='linkedin' placeholder='linkedin link' value={data.social.linkedin.link} onChange={e => setData({ ...data, social: { ...data.social, linkedin: { ...data.social.linkedin, link: e.target.value } } })}></input>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Editor
