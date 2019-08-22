<template>
	<div class="vx-row">
		<!-- MULTIPLE COLUMNS-->
		<div class="vx-col w-full mb-base">
			<vx-card title='Enter Details Below' code-toggler>
				<form>
					<div class="vx-row">
						<div class="vx-col sm:w-1/2 w-full mb-2">
							<vs-input class="w-full" label-placeholder="Report Name" v-model="input25" />
						</div>
						<div class="vx-col sm:w-1/2 w-full mb-2">
							<vs-input class="w-full" label-placeholder="Intro Text" v-model="input26" />
						</div>
					</div>
					<div class="vx-row">
						<div class="vx-col sm:w-1/2 w-full mb-2">
							<vs-input class="w-full" label-placeholder="Summary" v-model="input27" />
						</div>
						<div class="vx-col sm:w-1/2 w-full mb-2">
							<vs-input class="w-full" label-placeholder="Table Of Content" v-model="input28" />
						</div>
					</div>
					<div class="vx-row my-4">
						<div class="vx-col w-full">
							<p class="">Summary</p>
						</div>
						<div class="vx-col w-full mb-2 mt-2">
							<quill-editor v-model="input.summary" v-validate="'required'"  :options="{ placeholder: 'Enter summary here..' }" name="summary"></quill-editor>
							<span class="text-danger text-sm" v-show="errors.has('summary')">{{ errors.first('summary') }}</span>
						</div>
					</div>
					<div class="vx-row my-4">
						<div class="vx-col w-full">
							<p class="">Table Of Content</p>
						</div>
						<div class="vx-col w-full mb-2 mt-2">
							<quill-editor v-model="input.table_of_content" v-validate="'required'" :options="{ placeholder: 'Enter table of contents here..' }" name="table_of_content"></quill-editor>
							<span class="text-danger text-sm" v-show="errors.has('table_of_content')">{{ errors.first('table_of_content') }}</span>
						</div>
					</div>
					<div class="vx-row my-4">
						<div class="vx-col w-full">
							<p class="">List of Table</p>
						</div>
						<div class="vx-col w-full mb-2 mt-2">
							<quill-editor v-model="input.list_of_table" v-validate="'required'" :options="{ placeholder: 'Enter list of tables here..' }" name="list_of_table"></quill-editor>
							<span class="text-danger text-sm" v-show="errors.has('list_of_table')">{{ errors.first('list_of_table') }}</span>
						</div>
					</div>
					<div class="vx-row my-4">
						<div class="vx-col w-full">
							<p class="">List of Figures</p>
						</div>
						<div class="vx-col w-full mb-2 mt-2">
							<quill-editor v-model="input.list_of_figure" v-validate="'required'" :options="{ placeholder: 'Enter list of figures here..' }" name="list_of_figure"></quill-editor>
							<span class="text-danger text-sm" v-show="errors.has('list_of_figure')">{{ errors.first('list_of_figure') }}</span>
						</div>
					</div>

					<div class="vx-row">
						<div class="vx-col sm:w-1/2 w-full mb-2">
							<vs-input class="w-full" label-placeholder="List Of Tables" v-model="input29" />
						</div>
						<div class="vx-col sm:w-1/2 w-full mb-2">
							<vs-input type="email" class="w-full" v-validate="'email'" label-placeholder="List of Figures" v-model="input30" />
							<span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
						</div>
					</div>
					<div class="vx-row">
						<div class="vx-col sm:w-1/2 w-full mb-2">
							<vs-input class="w-full" label-placeholder="Key Companies" v-model="input29" />
						</div>
						<div class="vx-col sm:w-1/2 w-full mb-6">
							<vs-input type="email" class="w-full" label-placeholder="Geography" v-model="input30" />
						</div>
					</div>
					<div class="vx-row">
						<div class="vx-col w-full mb-6">
							<vs-checkbox class="inline-flex" v-model="check7">Remember Me</vs-checkbox>
						</div>
					</div>
					<div class="vx-row">
						<div class="vx-col w-full">
							<vs-button class="mr-3 mb-2" @click.prevent="submitForm()">Submit</vs-button>
							<vs-button color="warning" type="border" class="mb-2" @click="input25 = input26 = input27 = input28 = input29 = input30 = ''; check7 = false;">Reset</vs-button>
						</div>
					</div>
				</form>
			</vx-card>
		</div>
	</div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'

export default{
	data() {
		return {
			required: '',
			check1: '',
			check2: '',
			check3: '',
			check4: '',
			check5: '',
			check6: '',
			check7: '',
			input1: '',
			input2: '',
			input3: '',
			input4: '',
			input5: '',
			input6: '',
			input7: '',
			input8: '',
			input9: '',
			input10: '',
			input11: '',
			input12: '',
			input13: '',
			input14: '',
			input15: '',
			input16: '',
			input17: '',
			input18: '',
			input19: '',
			input20: '',
			input21: '',
			input22: '',
			input23: '',
			input24: '',
			input25: '',
			input26: '',
			input27: '',
			input28: '',
			input29: '',
			input30: '',
			input: {}
		}
	},
	components: {
		quillEditor
	},
 	methods: {
        submitForm() {
            this.$validator.validateAll().then(result => {
                if(result) {
                    this.$http.post('/api/create-report',
						this.input);
					this.$router.push('/');
                }else{
                    // form have errors
                }
            })
        }
    },

	
}
</script>
