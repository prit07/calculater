import React from 'react';
import photo from '../cls.gif';
import '../style.css';
import 'animate.css';
import {add,subs,mult} from '../components/CalcApp';
class  MyApp extends React.Component
{
    render()
    {
    return(
        <>
        <section id="clc-app">
        <div className='myapp'>
        <h1>My first calc app Events</h1>
        <p>Just aplied events in react js</p>
        <img src={photo} alt="myimg" title='hello images' />
        </div>  
            {/* <div className='clc-btn'>
                <button  onClick={add}>Additions</button>
                <button  onClick={subs}>Substractions</button>
                <button  onClick={mult}>Multiplications</button>
            </div> */}
    <div className='clc'>
            <table align="center">
	 	<tr>
			<td colspan="6">
				<input type="text" name="" id="result" placeholder="0" />
			</td>
            </tr>
        <tr>
			<td><input type="button" class="btn"  value="%" /></td>
			<td><input type="button" class="btn"  value="CE"/></td>
			<td><input type="button" class="btn"  value="C" /></td>
			<td><input type="button" class="btn"  value="<-" /></td>
		</tr>
        <tr>
			<td><input type="button" class="btn"  value="1/x" /></td>
			<td><input type="button" class="btn"  value="x^2" /></td>
			<td><input type="button" class="btn"  value="x^-2" /></td>
			<td><input type="button" class="btn"  value="=" /></td>
		</tr>
		<tr>
			<td><input type="button" class="btn"  value="7" /></td>
			<td><input type="button" class="btn"  value="9" /></td>
			<td><input type="button" class="btn"  value="/" /></td>
			<td><input type="button" class="btn"  value="8" /></td>
		</tr>
		<tr>
			<td><input type="button" class="btn"  value="4" /></td>
			<td><input type="button" class="btn"  value="5" /></td>
			<td><input type="button" class="btn"  value="6" /></td>
			<td><input type="button" class="btn"  value="*" /></td>
		</tr>
		<tr>
			<td><input type="button" class="btn"  value="1" /></td>
			<td><input type="button" class="btn"  value="2" /></td>
			<td><input type="button" class="btn"  value="3" /></td>
			<td><input type="button" class="btn"  value="+" /></td>
		</tr>
		<tr>
			<td><input type="button" class="btn"  value="." /></td>
			<td><input type="button" class="btn"  value="0" /></td>
			<td><input type="button" class="btn"  value="+/-" /></td>
			<td><input type="button" class="btn" value="-" /></td>
		</tr>
	</table>
</div>
</section>
        </>
    )
}  
}
export default MyApp;