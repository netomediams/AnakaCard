import React from 'react'

function Theme({data, copied}) {

//816px
    return (
<table 
            id='table-content'
            className={`table ${copied}`}
            style={{
            padding: '0 4em', 
            color: 'whitesmoke', 
            background: "url('https://raw.githubusercontent.com/netomediams/anakaMail/main/src/images/nm.png')", 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            width: '100vw', 
            maxWidth: '816px',
            fontSize: '16px',
            height: '40vw',
            maxHeight: '234px',
        }}>
            <tr>
                <tr style={{
                        width: '100%',
                    }}
                >
                    <td style={{
                        width: '100%',
                        height: '.5em',
                        color: '#262626',
                        fontSize: '24px',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                    }}>
                        {data.name}
                    </td>
                </tr>
                <tr>
                    <td style={{
                        width: '100%',
                        color: 'orange',
                        fontWeight: '600',
                        verticalAlign: 'top',
                    }}>
                        {data.title}
                    </td>
                </tr>
                <tr>
                    {data.phone &&
                        <td 
                        style={{
                            width: '100%', 
                            verticalAlign: 'bottom', 
                            height: '3em',
                            }}
                        >
                            <img 
                            style={{
                                marginRight: '.5em', 
                                marginBottom: '.15em', 
                                width: '1.1em', 
                                height: '1.1em', 
                                display: 'inline-block',
                                verticalAlign: 'bottom', 
                                }} 
                            src='https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/phone.png?raw=true' alt=""/>
                            {data.phone}
                        </td>
                    }
                </tr>
                {data.fax &&
                    <tr>
                        <td style={{width: '100%', verticalAlign: 'top', display: 'flex', }}>
                            <img style={{marginRight: '.5em', width: '1.1em', height: '1.1em', }} src='https://github.com/anakatech-kaykostadinov/mailsig/blob/main/src/images/phone.png?raw=true' alt=""/>
                            <p style={{margin: '0', }}>{data.fax}</p>
                        </td>
                    </tr>
                }
                <tr className='website-name'>
                    <td style={{width: '100%', verticalAlign: 'bottom',}}>
                        <a 
                        href={data.website.link}
                        style={{
                            textDecoration: 'none',
                            color: 'whitesmoke',
                            fontWeight: '600'
                        }}
                        >
                            {data.website.name}
                        </a>
                    </td>
                </tr>

                <tr
                style={{
                    width: '100%',
                }}
                >
                    <td style={{width: '50%', verticalAlign: 'top',}}>
                        {data.address}
                    </td>

                    <td style={{
                        textAlign: 'right',
                        width: '100%',
                        display: 'flex',
                    }}>
                        { // social media buttons
                        Object.entries(data.social).map( (media, key) => {
                            // show only if field is populated
                            if (media[1].link !== '') {
                                return (
                                    <a 
                                        key={key}
                                        href={media[1].link}
                                        style={{
                                            margin: '0 .2em'
                                    }}
                                    >
                                        <img
                                            style={{
                                            width: '2em',
                                            height: '2em'
                                        }}
                                        src={media[1].icon}
                                        alt="social media"/>
                                    </a>
                                );
                            }
                        })}
                    </td>
                </tr>
            </tr>
        </table>
    )
}

export default Theme


// style={{width: '2em', height: '2em', }} 

// { // social media buttons
//     Object.entries(data.social).map( (media, key) => {
//         // show only if field is populated
//         if (media[1].link !== '') {
//             return (
//                 <a 
//                 key={key}
//                 href={media[1].link}
//                 style={{
//                     margin: '0 .2em'
//                 }}
//                 >
//                     <img
//                     style={{
//                         width: '2em',
//                         height: '2em'
//                     }}
//                     src={media[1].icon}
//                     alt="social media"/>
//                 </a>
//             );
//         }
//     })
// }