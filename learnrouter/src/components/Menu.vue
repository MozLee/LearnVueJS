<template>
  	<div class="header-box">
				<ul class="nav-list">
					<li class="select">
                        <router-link :to="{name:'Faxian'}">发现</router-link>
					</li>
					<li>
                        <router-link :to="{name:'Guanzhu'}">关注</router-link>
						
					</li>
					<li class="message">
                        <router-link :to="{name:'Xiaoxi'}">消息</router-link>
						<ul class="dropdown-menu">
							<li>
								<a href="">评论</a>
							</li>
							<li>
								<a href="">简信</a>
							</li>
							<li>
								<a href="">关注</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
</template>
<script>

</script>