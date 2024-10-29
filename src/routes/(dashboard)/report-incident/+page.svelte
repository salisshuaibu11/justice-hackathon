<script></script>

<section class="px-5 mt-5 mb-10">
	<p class="text-center">Report incident</p>
	<form action="" class="mt-6 space-y-5">
		<div class="flex flex-col space-y-3">
			<label for="what">What do you need help with?</label>

			<select name="incidence" id="incidence" class="form-input">
				<option value="">Select incidence</option>
				<option value="I was raped">I was raped</option>
				<option value="I was robbed">I was robbed</option>
			</select>
		</div>

		<div class="flex flex-col space-y-3">
			<label for="date">Date of incidence</label>
			<input type="date" name="date" id="date" class="form-input" />
		</div>

		<div class="flex flex-col space-y-3">
			<label for="phone">Your phone number</label>
			<input type="text" class="form-input" placeholder="09012345678" />
		</div>

		<div class="flex flex-col space-y-3">
			<label for="details">Details of incidence</label>
			<textarea
				name="details"
				id="details"
				cols="5"
				rows="7"
				class="form-input"
				placeholder="Give us a description of what happened"
			></textarea>
		</div>

		<div class="text-center flex items-center space-x-2 pb-10">
			<img class="w-auto" src="/image-thumbnail.png" alt="thumbnail" />
			<div class="text-xs text-left text-gray-600 space-y-2">
				<p>Please upload image of any Evidence , size less than 100KB</p>
				<input type="file" accept="image/*" />
			</div>
		</div>
		<button class="bg-primary text-white w-full rounded-full py-4">Submit Incident</button>
	</form>
</section>

<style>
	input[type='file'] {
		max-width: 100%;
		color: #444;
		background: #f8fcff;
		border-radius: 10px;
		padding: 2px;
	}

	input[type='file']::file-selector-button {
		margin-right: 20px;
		border: 1px solid #084cdf;
		background: transparent;
		padding: 10px 20px;
		border-radius: 5px;
		color: #084cdf;
		cursor: pointer;
		transition: background 0.2s ease-in-out;
	}
</style>
