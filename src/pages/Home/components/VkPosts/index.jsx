import React, { useEffect, useState } from 'react';


export const  VkPosts = () => {
		const [text, setText] = useState(null)
		const VK = window.VK;
		
    useEffect(()=>{
			if(!text) {
				VK.init({
					apiId: 7328174
				});
				VK.Api.call('wall.get', {owner_id: '-60180312', count: '2', filter: 'owner', bool: '0', v: '5.103'},(r) => { // eslint-disable-line no-undef
					try {
						const response = r.response
						console.log(r.response)
						setText(response)
					}
					catch(e) {
							console.log(e)
					}
			})
		}
		},[text, setText, VK])
		
    return ( 
        <section className="vk-posts">
            {
            text ? text.items[0].text.split('\n').map(item => <div key={item}>{item}</div>) : null }
        </section>
     );
}
 